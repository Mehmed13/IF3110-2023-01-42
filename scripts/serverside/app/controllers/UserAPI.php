<?php
class UserAPI extends Controller
{
    protected $model = null;
    public function getProfile()
    {
        if ($_SERVER['REQUEST_METHOD'] != 'GET') {
            return json_response_fail(METHOD_NOT_ALLOWED);
        }
        $res = $this->getModel("User")->getProfile($_GET['ID_Pengguna']);
        if ($res) {
            json_response_success($res);
        } else {
            json_response_fail('PROFILE_NOT_FOUND');
        }
    }

    public function editProfile()
    {
        if ($_SERVER['REQUEST_METHOD'] != 'POST') {
            return json_response_fail(METHOD_NOT_ALLOWED);
        }

        //if ID_Pengguna, nama_depan, nama_belakang, username, email, password, profile_pict not null => mungkin akan ditambahkan edit role dan verified
        if(isset($_POST['ID_Pengguna']) && isset($_POST['nama_depan']) && isset($_POST['nama_belakang']) && isset($_POST['username']) && isset($_POST['email']) && isset($_POST['password']) && isset($_POST['profile_pict'])){
            $result = $this->getModel('User')->editProfile($_POST['ID_Pengguna'], $_POST['nama_depan'], $_POST['nama_belakang'], $_POST['username'], $_POST['email'], $_POST['password'], $_POST['profile_pict']);
            if ($result) {
                json_response_success($result);
            } else {
                json_response_fail($result);
            }
        }else{
            return json_response_fail(WRONG_API_CALL);
        }
    }
}

