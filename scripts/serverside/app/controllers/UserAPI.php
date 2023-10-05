<?php
class UserAPI extends Controller
{
    protected $model = null;
    public function getProfile()
    {
        if ($_SERVER['REQUEST_METHOD'] != 'GET') {
            return json_response_fail(METHOD_NOT_ALLOWED);
        }
        $res = $this->getModel("User")->getProfile($_GET['profile_id']);
        if ($res) {
            json_response_success($res);
        } else {
            json_response_fail('PROFILE_NOT_FOUND');
        }
    }
}

