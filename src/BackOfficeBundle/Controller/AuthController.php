<?php

namespace BackOfficeBundle\Controller;

use MiddlewareBundle\Entity\LoginTry;
use MiddlewareBundle\Form\LoginType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

/**
 * @Route("auth")
 */
class AuthController extends Controller
{
    /**
     * @Route("/login", name="auth_login")
     */
    public function loginAction(Request $request)
    {
        $login = new LoginTry();
        $form = $this->createForm(LoginType::class, $login,  [
            'action' => $this->generateUrl('auth_login_check')
        ]);
        $authenticationUtils = $this->get('security.authentication_utils');
        $form->handleRequest($request);
        return $this->render('BackOfficeBundle:Auth:login.html.twig', [
            'base_dir'      => realpath($this->getParameter('kernel.root_dir').'/..').DIRECTORY_SEPARATOR,
            'form'          => $form->createView(),
            'last_username' => $authenticationUtils->getLastUsername(),
            'error'         => $authenticationUtils->getLastAuthenticationError(),
        ]);
    }

    /**
     * @Route("/login_check", name="auth_login_check")
     */
    public function loginCheckAction(Request $request)
    {

    }

    /**
     * @Route("/logout", name="auth_logout")
     */
    public function logoutAction(Request $request)
    {

    }

}
