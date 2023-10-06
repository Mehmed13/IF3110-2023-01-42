<?php

class Auth extends Controller
{
    protected $model = null;
    public function __construct()
    {
        $this->model = $this->getModel("User");
        require_once __DIR__ . '/../applications/response.php';
        require_once __DIR__ . '/../constants/response.php';
    }
    public function login()
    {
        if ($_SERVER['REQUEST_METHOD'] == 'POST') {
            if (isset($_SESSION["user"])) {
                json_response_fail(ALREADY_LOGIN);
                return;
            }
            if (!(isset($_POST['username']) && isset($_POST['password']))) {
                json_response_fail(WRONG_API_CALL);
                return;
            }
            $res = $this->model->login($_POST['username'], $_POST['password']);
            if ($res[0]) {
                $data = array('username' => $res['username'], "email" => $res['email']);
                $_SESSION["user"] = array(
                    'ID_Pengguna' => $res['ID_Pengguna'],
                    'nama_depan' => $res['nama_depan'],
                    'nama_belakang' => $res['nama_belakang'],
                    'username' => $res['username'],
                    'email' => $res['email'],
                    'isVerified' => $res['isVerified'],
                    'role' => $res['role'],
                    'profile_pict' => $res['profile_pict']
                );
                json_response_success($data);
            } else {
                json_response_fail($res[1]);
            }
        } else {
            json_response_fail(METHOD_NOT_ALLOWED);
        }
    }

    public function logout()
    {
        session_destroy();
        json_response_success("success");
    }

    public function info()
    {
        if ($_SERVER['REQUEST_METHOD'] == 'GET') {
            if (isset($_SESSION["user"])) {
                json_response_success($_SESSION["user"]);
            } else {
                json_response_fail(NOT_LOGGED_IN);
            }
        } else {
            json_response_fail(WRONG_API_CALL);
        }
    }
}
