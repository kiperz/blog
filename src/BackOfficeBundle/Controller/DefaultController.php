<?php
/**
 * Created by PhpStorm.
 * User: Master
 * Date: 08.02.2017
 * Time: 22:53
 */

namespace BackOfficeBundle\Controller;

use BackOfficeBundle\Form\LoginForm;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class DefaultController extends Controller
{
    /**
     * @Route("/backoffice", name="back_office_index")
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
        return $this->forward('BackOfficeBundle:Default:login');
    }

    /*
     * @Route("/backoffice/login", name="back_office_login")
     */
    public function loginAction(Request $request)
    {
        if($request->isMethod(Request::METHOD_POST)) {

        }
        $form = $this->createForm(LoginForm::class);

        return $this->render(':back_office:login.html.twig', [
            'base_dir' => realpath($this->getParameter('kernel.root_dir').'/..').DIRECTORY_SEPARATOR,
            'form' => $form->createView()
        ]);
    }
}
