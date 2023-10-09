<?php
class JawabanSalahAPI extends Controller
{
    public function getJawabanSalahByIDSoal()
    {
        if ($_SERVER['REQUEST_METHOD'] != 'GET') {
            return json_response_fail(METHOD_NOT_ALLOWED);
        }
        $res = $this->getModel("JawabanSalah")->getJawabanSalahByIDSoal();
        if ($res) {
            json_response_success($res);
        } else {
            json_response_fail('JAWABAN_SALAH_NOT_FOUND');
        }
    }
}

