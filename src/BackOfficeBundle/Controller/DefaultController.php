<?php
/**
 * Created by PhpStorm.
 * User: Master
 * Date: 08.02.2017
 * Time: 22:53
 */

namespace BackOfficeBundle\Controller;

use BackOfficeBundle\Entity\Login;
use BackOfficeBundle\Form\LoginForm;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class DefaultController extends Controller
{
    /**
     * @Route("/", name="back_office_index")
     */
    public function indexAction(Request $request)
    {
        if($request->hasSession())
        {
            if($request->getSession()->get('loggedIn'))
            {
                return $this->render(':back_office:index.html.twig', [
                    'base_dir' => realpath($this->getParameter('kernel.root_dir').'/..').DIRECTORY_SEPARATOR,
                ]);
            }
        }
        return $this->redirectToRoute('back_office_login');
    }

    /**
     * @Route("/login", name="back_office_login")
     */
    public function loginAction(Request $request)
    {
        $login = new Login();
        $form = $this->createForm(LoginForm::class, $login);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $login = $form->getData();
            if($login->isAuthenticated())
            {
                $request->getSession()->set('loggedIn', true);
                return $this->redirectToRoute('back_office_index');
            }
        }
        return $this->render(':back_office:login.html.twig', [
            'base_dir' => realpath($this->getParameter('kernel.root_dir').'/..').DIRECTORY_SEPARATOR,
            'form' => $form->createView()
        ]);
    }
}
