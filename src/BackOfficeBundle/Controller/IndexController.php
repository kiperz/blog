<?php
/**
 * Created by PhpStorm.
 * User: Master
 * Date: 08.02.2017
 * Time: 22:53
 */

namespace BackOfficeBundle\Controller;

use BackOfficeBundle\Entity\LoginTry;
use BackOfficeBundle\Entity\User;
use BackOfficeBundle\Form\LoginType;
use BackOfficeBundle\Form\UserType;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Exception\AuthenticationException;

/**
 * BackOffice index controller.
 *
 * @Route("backoffice")
 */
class IndexController extends Controller
{
    /**
     * @Route("/", name="backoffice_index")
     */
    public function indexAction(Request $request)
    {
        $securityContext = $this->get('security.authorization_checker');
        if ($securityContext->isGranted('IS_AUTHENTICATED_FULLY')) {
            return $this->render('BackOfficeBundle::index.html.twig');
        }
        throw new AuthenticationException("Unauthorized access!"); //return $this->redirectToRoute('auth_login');
    }
}
