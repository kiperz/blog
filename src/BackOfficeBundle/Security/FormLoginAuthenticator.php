<?php

namespace BackOfficeBundle\Security;

use Symfony\Component\DependencyInjection\ContainerAwareInterface;
use Symfony\Component\DependencyInjection\ContainerAwareTrait;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\Routing\RouterInterface;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Core\Exception\BadCredentialsException;
use Symfony\Component\Security\Core\Exception\AuthenticationException;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Security\Core\User\UserProviderInterface;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Guard\Authenticator\AbstractFormLoginAuthenticator;
use Symfony\Component\Security\Core\Security;
use BackOfficeBundle\Entity\LoginTry;
use BackOfficeBundle\Form\LoginType;

class FormLoginAuthenticator extends AbstractFormLoginAuthenticator  implements ContainerAwareInterface
{
    private $router;
    private $encoder;
    private $formFactory;

    use ContainerAwareTrait;

    public function __construct(RouterInterface $router, UserPasswordEncoderInterface $encoder, \Symfony\Component\Form\FormFactory $formFactory)
    {
        $this->router = $router;
        $this->encoder = $encoder;
        $this->formFactory = $formFactory;
    }

    public function getCredentials(Request $request)
    {
        if ($request->getPathInfo() != '/backoffice/login_check') {
            return;
        }
        $login = new LoginTry();
        $form = $this->formFactory->create(LoginType::class, $login,  [
            'action' => $this->router->generate('back_office_login_check')
        ]);
        $form->handleRequest($request);
        $login = $form->getData();
        $request->getSession()->set(Security::LAST_USERNAME, $login->getUsername());
        return $login;
    }

    public function getUser($credentials, UserProviderInterface $userProvider)
    {
        return $userProvider->loadUserByUsername($credentials->getUsername());
    }

    public function checkCredentials($credentials, UserInterface $user)
    {
        if ($this->encoder->isPasswordValid($user, $credentials->getPassword())) {
            return true;
        }

        throw new BadCredentialsException();
    }

    public function onAuthenticationSuccess(Request $request, TokenInterface $token, $providerKey)
    {
        $url = $this->router->generate('back_office_index');
        return new RedirectResponse($url);
    }

    public function onAuthenticationFailure(Request $request, AuthenticationException $exception)
    {
        $request->getSession()->set(Security::AUTHENTICATION_ERROR, $exception);
        $url = $this->router->generate('back_office_login');
        return new RedirectResponse($url);
    }

    protected function getLoginUrl()
    {
        return $this->router->generate('back_office_login');
    }

    protected function getDefaultSuccessRedirectUrl()
    {
        return $this->router->generate('back_office_index');
    }

    public function supportsRememberMe()
    {
        return false;
    }
}