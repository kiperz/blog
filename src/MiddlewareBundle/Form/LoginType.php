<?php

namespace MiddlewareBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;

class LoginType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
        ->add('username', EmailType::class,[
            'required' => true,
            'trim' => true,
            'attr' => array('placeholder' => 'E-mail')
        ])
        ->add('password', PasswordType::class,[
            'required' => true,
            'trim' => true,
            'attr' => array('placeholder' => 'Password')
        ])
        ->add('rememberMe', CheckboxType::class, [
            'required' => false
        ]);
    }
}