<?php

class ExerciseAPI extends Controller
{
    public function __construct() {
        $this->model = $this->getModel("Exercise");
    }
}