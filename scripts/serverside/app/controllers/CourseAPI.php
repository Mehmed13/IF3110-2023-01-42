<?php
class CourseAPI extends Controller
{
    public function getPage()
    {
        if ($_SERVER['REQUEST_METHOD'] != 'GET') {
            return json_response_fail(METHOD_NOT_ALLOWED);
        }
        $res = $this->getModel("Course")->getPage($_GET['page'], $_GET['rows_per_page']);
        if ($res) {
            json_response_success($res);
        } else {
            json_response_fail('COURSE_NOT_FOUND');
        }
    }

    public function getNumberOfCourse()
    {
        if ($_SERVER['REQUEST_METHOD'] != 'GET') {
            return json_response_fail(METHOD_NOT_ALLOWED);
        }
        $res = $this->getModel("Course")->getNumberOfCourse();
        if ($res) {
            json_response_success($res);
        } else {
            json_response_fail('COURSE_NOT_FOUND');
        }
    }

}

