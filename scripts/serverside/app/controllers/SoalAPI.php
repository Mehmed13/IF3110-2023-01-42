<?php
class SoalAPI extends Controller
{
    public function getSoalByIDMaterial()
    {
        if ($_SERVER['REQUEST_METHOD'] != 'GET') {
            return json_response_fail(METHOD_NOT_ALLOWED);
        }
        $res = $this->getModel("Soal")->getSoalByIDMaterial();
        if ($res) {
            json_response_success($res);
        } else {
            json_response_fail('EXERCISE_NOT_FOUND');
        }
    }
}