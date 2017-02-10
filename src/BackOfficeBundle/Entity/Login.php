<?php
/**
 * Created by PhpStorm.
 * User: kantosik
 * Date: 2017-02-10
 * Time: 12:04
 */

namespace BackOfficeBundle\Entity;

use Symfony\Component\Validator\Constraints as Assert;

class Login
{
    /**
     * @Assert\NotBlank()
     * @Assert\Email()
     */
    protected $login;
    /**
     * @Assert\NotBlank()
     */
    protected $password;
    protected $rememberMe;

    /**
     * @return mixed
     */
    public function getLogin()
    {
        return $this->login;
    }

    /**
     * @param mixed $login
     */
    public function setLogin($login)
    {
        $this->login = $login;
    }

    /**
     * @return mixed
     */
    public function getPassword()
    {
        return $this->password;
    }

    /**
     * @param mixed $password
     */
    public function setPassword($password)
    {
        $this->password = $password;
    }

    /**
     * @return mixed
     */
    public function getRememberMe()
    {
        return $this->rememberMe;
    }

    /**
     * @param mixed $rememberMe
     */
    public function setRememberMe($rememberMe)
    {
        $this->rememberMe = $rememberMe;
    }
    /**
     * @Assert\IsFalse(message = "Can not login!")
     */
    public function isAuthenticated()
    {
        return $this->login == 'kiper';
    }
}