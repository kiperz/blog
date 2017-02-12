<?php

namespace BackOfficeBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
/**
 * @Route("auth")
 */
class AuthController extends Controller
{
    /**
     * @Route("/login", name="backoffice_login")
     */
    public function loginAction(Request $request)
    {
        $login = new LoginTry();
        $form = $this->createForm(LoginType::class, $login,  [
            'action' => $this->generateUrl('backoffice_login_check')
        ]);
        $form->handleRequest($request);
        $authenticationUtils = $this->get('security.authentication_utils');
        return $this->render('BackOfficeBundle:Auth:login.html.twigg', [
            'base_dir'      => realpath($this->getParameter('kernel.root_dir').'/..').DIRECTORY_SEPARATOR,
            'form'          => $form->createView(),
            'last_username' => $authenticationUtils->getLastUsername(),
            'error'         => $authenticationUtils->getLastAuthenticationError(),
        ]);
    }

    /**
     * @Route("/login_check", name="backoffice_login_check")
     */
    public function loginCheckAction(Request $request)
    {

    }

    /**
     * @Route("/logout", name="backoffice_logout")
     */
    public function logoutAction(Request $request)
    {

    }

}
