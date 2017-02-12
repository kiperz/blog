<?php
namespace BackOfficeBundle\Form;

use Symfony\Component\DependencyInjection\ContainerAwareTrait;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\OptionsResolver\OptionsResolver;


class UserType extends AbstractType
{
    use ContainerAwareTrait;
    const SCENARIO_CREATE = 'create';
    const SCENARIO_UPDATE = 'update';
    const SCENARIO_DELETE = 'delete';
    const SCENARIO_VIEW   = 'view';

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        switch($options['scenario'])
        {
            case self::SCENARIO_CREATE:
                $builder
                    ->add('username', EmailType::class)
                    ->add('password', PasswordType::class);
                break;
            case self::SCENARIO_DELETE:
                $builder
                    ->setAction($options['action'])
                    ->setMethod('DELETE');
                break;
            case self::SCENARIO_UPDATE:
                $builder
                    ->add('username', EmailType::class)
                    ->add('password', PasswordType::class)
                    ->add('isActive', CheckboxType::class, [
                        'required' => false
                    ])
                    ->add('role', TextType::class);
                break;
            case self::SCENARIO_VIEW:
                $builder
                    ->add('username', EmailType::class)
                    ->add('password', PasswordType::class)
                    ->add('isActive', CheckboxType::class, [
                        'required' => false
                    ])
                    ->add('role', TextType::class)
                    ->add('createdBy', TextType::class)
                    ->add('createdAt', DateType::class)
                    ->add('updatedBy', TextType::class)
                    ->add('updatedAt', DateType::class);
                break;
        }
    }
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setRequired('scenario');
        $resolver->setAllowedValues('scenario',[self::SCENARIO_CREATE, self::SCENARIO_UPDATE, self::SCENARIO_DELETE, self::SCENARIO_VIEW]);

        $resolver->setDefined('action');

    }
}