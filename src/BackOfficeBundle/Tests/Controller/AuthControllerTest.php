<?php

namespace BackOfficeBundle\Tests\Controller;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class AuthControllerTest extends WebTestCase
{
    public function testLogin()
    {
        $client = static::createClient();

        $crawler = $client->request('GET', '/login');
    }

    public function testLogincheck()
    {
        $client = static::createClient();

        $crawler = $client->request('GET', '/loginCheck');
    }

}
