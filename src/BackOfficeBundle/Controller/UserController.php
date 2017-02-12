<?php

namespace BackOfficeBundle\Controller;

use MiddlewareBundle\Entity\User;
use MiddlewareBundle\Form\UserType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

/**
 * User controller.
 *
 * @Route("backoffice/user")
 */
class UserController extends Controller
{
    /**
     * Lists all user entities.
     *
     * @Route("/", name="backoffice_user_index")
     * @Method("GET")
     */
    public function indexAction()
    {
        $em = $this->getDoctrine()->getManager();
        $users = $em->getRepository('MiddlewareBundle:User')->findAll();
        return $this->render('BackOfficeBundle:User:index.html.twig', array(
            'users' => $users,
        ));
    }

    /**
     * Creates a new user entity.
     *
     * @Route("/new", name="backoffice_user_new")
     * @Method({"GET", "POST"})
     */
    public function newAction(Request $request)
    {
        $user = new User();
        $form = $this->createForm(UserType::class, $user, ['scenario' => UserType::SCENARIO_CREATE]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $password = $this->get('security.password_encoder')->encodePassword($user, $user->getPassword());
            $user->setPassword($password);
            $em = $this->getDoctrine()->getManager();
            $em->persist($user);
            $em->flush();

            return $this->redirectToRoute('backoffice_user_show', array('id' => $user->getId()));
        }

        return $this->render('BackOfficeBundle:User:new.html.twig', array(
            'user' => $user,
            'form' => $form->createView(),
        ));
    }
    /**
     * Finds and displays a user entity.
     *
     * @Route("/{id}", name="backoffice_user_show")
     * @Method("GET")
     */
    public function showAction(User $user)
    {
        $deleteForm = $this->createForm(UserType::class, $user, [
            'scenario' => UserType::SCENARIO_DELETE,
            'action' => $this->generateUrl('backoffice_user_delete', array('id' => $user->getId()))
        ]);

        return $this->render('BackOfficeBundle:User:show.html.twig', array(
            'user' => $user,
            'delete_form' => $deleteForm->createView(),
        ));
    }

    /**
     * Displays a form to edit an existing user entity.
     *
     * @Route("/{id}/edit", name="backoffice_user_edit")
     * @Method({"GET", "POST"})
     */
    public function editAction(Request $request, User $user)
    {
        $deleteForm = $this->createForm(UserType::class, $user, [
            'scenario' => UserType::SCENARIO_DELETE,
            'action' => $this->generateUrl('backoffice_user_delete', array('id' => $user->getId()))
        ]);
        $editForm = $this->createForm(UserType::class, $user, ['scenario' => UserType::SCENARIO_UPDATE]);
        $editForm->handleRequest($request);
        if($user->getPassword())
        {
            $password = $this->get('security.password_encoder')->encodePassword($user, $user->getPassword());
            $user->setPassword($password);
        }
        if ($editForm->isSubmitted() && $editForm->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('backoffice_user_edit', array('id' => $user->getId()));
        }

        return $this->render('BackOfficeBundle:User:edit.html.twig', array(
            'user' => $user,
            'edit_form' => $editForm->createView(),
            'delete_form' => $deleteForm->createView(),
        ));
    }

    /**
     * Deletes a user entity.
     *
     * @Route("/{id}", name="backoffice_user_delete")
     * @Method("DELETE")
     */
    public function deleteAction(Request $request, User $user)
    {
        $form = $this->createForm(UserType::class, $user, [
            'scenario' => UserType::SCENARIO_DELETE,
            'action' => $this->generateUrl('backoffice_user_delete', array('id' => $user->getId()))
        ]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->remove($user);
            $em->flush();
        }

        return $this->redirectToRoute('backoffice_user_index');
    }
}
