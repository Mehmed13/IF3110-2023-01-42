<?php

class MaterialAPI extends Controller
{
    public function getPage()
    {
        if ($_SERVER['REQUEST_METHOD'] != 'GET') {
            return json_response_fail(METHOD_NOT_ALLOWED);
        }
        $res = $this->getModel("Material")->getPage($_GET['page'], $_GET['rows_per_page']);
        if ($res) {
            json_response_success($res);
        } else {
            json_response_fail('COURSE_NOT_FOUND');
        }
    }

    public function getNumberOfMaterial()
    {
        if ($_SERVER['REQUEST_METHOD'] != 'GET') {
            return json_response_fail(METHOD_NOT_ALLOWED);
        }
        $res = $this->getModel("Material")->getNumberOfMaterial();
        if ($res) {
            json_response_success($res);
        } else {
            json_response_fail('COURSE_NOT_FOUND');
        }
    }
    
    public function getMaterialByKodeMapelandModuleNumber()
    {
        if ($_SERVER['REQUEST_METHOD'] != 'GET') {
            return json_response_fail(METHOD_NOT_ALLOWED);
        }
        $res = $this->getModel("Material")->getMaterialByKodeMapelandModuleNumber($_GET['kode_mapel'], $_GET['module_number']);
        if ($res) {
            json_response_success($res);
        } else {
            json_response_fail('COURSE_NOT_FOUND');
        }
    }

    public function addMaterial(){
        if ($_SERVER['REQUEST_METHOD'] != 'POST') {
            return json_response_fail(METHOD_NOT_ALLOWED);
        }
    
        if(isset($_POST['kode_mapel']) && isset($_POST['no_modul']) && isset($_POST['judul']) && isset($_POST['video']) && isset($_POST['teks'])){
            $result = $this->getModel('Material')->addMaterial($_POST['kode_mapel'], $_POST['no_modul'], $_POST['judul'], $_POST['video'], $_POST['teks']);
            if ($result) {
                json_response_success($result);
            } else {
                json_response_fail($result);
            }
        }else{
            return json_response_fail(WRONG_API_CALL);
        }
    }
    public function editMaterial()
    {
        if ($_SERVER['REQUEST_METHOD'] != 'POST') {
            return json_response_fail(METHOD_NOT_ALLOWED);
        }

        if(isset($_POST['ID_Pengguna']) && isset($_POST['kode_mapel']) && isset($_POST['no_modul']) && isset($_POST['judul']) && isset($_POST['video']) && isset($_POST['teks'])){
            $result = $this->getModel('Material')->editMaterial($_POST['ID_Pengguna'],  $_POST['kode_mapel'], $_POST['no_modul'], $_POST['judul'], $_POST['video'], $_POST['teks']);
            if ($result) {
                json_response_success($result);
            } else {
                json_response_fail($result);
            }
        }else{
            return json_response_fail(WRONG_API_CALL);
        }
    }

    public function deleteMaterial()
    {
        if ($_SERVER['REQUEST_METHOD'] != 'POST') {
            return json_response_fail(METHOD_NOT_ALLOWED);
        }

        //if no_modul is not null, delete it
        if(isset($_POST['ID_Material'])){
            $result = $this->getModel('Material')->deleteMaterial($_POST['ID_Material']);
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

