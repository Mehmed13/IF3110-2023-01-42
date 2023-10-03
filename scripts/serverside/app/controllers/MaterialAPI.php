<?php

class MaterialAPI extends Controller
{
    public function __construct() {
        $this->model = $this->getModel("Material");
    }
}

