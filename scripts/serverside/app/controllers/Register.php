<?php

class Register extends Controller
{
    public function __construct() {
        $this->model = $this->getModel("User");
    }
}

