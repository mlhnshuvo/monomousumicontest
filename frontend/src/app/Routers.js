import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Alert
import Alert from "../components/utils/Tostify";
import Page404 from "../components/Page404";

// User panel
import RequireAuth from "./RequireAuth";
import Register from "../pages/userPanel/Register";
import Login from "../pages/userPanel/Login";
import DashboardUser from "../pages/userPanel/Dashboard";
import SubmitArticle from "../pages/userPanel/SubmitArticle";
import Result from "../pages/userPanel/Result";
import AwardsUser from "../pages/userPanel/Awards";
import AuthorUser from "../pages/userPanel/Author";
import ActiveAccount from "../pages/userPanel/ActiveAccount";
import FindMail from "../pages/userPanel/FindMail";
import CheckMsg from "../pages/userPanel/CheckMsg";
import RecoverPassword from "../pages/userPanel/RecoverPassword";

// Admin panel
import AdminRequireAuth from "./AdminRequireAuth";
import RegisterAdmin from "../pages/adminPanel/Register";
import LoginAdmin from "../pages/adminPanel/Login";
import Dashboard from "../pages/adminPanel/Dashboard";
import Articles from "../pages/adminPanel/Articles";
import GradeSelection from "../pages/adminPanel/GradeSelection";
import AnnounceResult from "../pages/adminPanel/AnnounceResult";
import RecoverPasswordAdmin from "../pages/adminPanel/RecoverPassword";
import FindMailAdmin from "../pages/adminPanel/FindMail";
import CheckMsgAdmin from "../pages/adminPanel/CheckMsg";
import ActiveAccountAdmin from "../pages/adminPanel/ActiveAccount";
import ArticleDetails from "../pages/adminPanel/ArticleDetails";
import Awards from "../pages/adminPanel/Awards";
import Author from "../pages/adminPanel/Author";
import JudgeApproved from "../pages/adminPanel/JudgeApproved";

const Routers = () => {
  const adminReducer = useSelector((store) => store.adminUserReducer);

  return (
    <BrowserRouter>
      <Alert />
      {adminReducer.user && adminReducer.user.role === "judge" ? (
        <Routes>
          {/* User Panel */}
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="active/:token" element={<ActiveAccount />}></Route>
          <Route path="findmail" element={<FindMail />}></Route>
          <Route path="checkmsg" element={<CheckMsg />}></Route>
          <Route
            path="recoverpassword/:token"
            element={<RecoverPassword />}
          ></Route>
          <Route
            path=""
            element={
              <RequireAuth>
                <DashboardUser />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="submitarticle"
            element={
              <RequireAuth>
                <SubmitArticle />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="result"
            element={
              <RequireAuth>
                <Result />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="award"
            element={
              <RequireAuth>
                <AwardsUser />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="author"
            element={
              <RequireAuth>
                <AuthorUser />
              </RequireAuth>
            }
          ></Route>

          {/* Admin panel */}
          <Route path="admin/register" element={<RegisterAdmin />} />
          <Route path="admin/login" element={<LoginAdmin />} />
          <Route path="admin/active/:token" element={<ActiveAccountAdmin />} />
          <Route path="admin/findmail" element={<FindMailAdmin />} />
          <Route path="admin/checkmsg" element={<CheckMsgAdmin />}></Route>
          <Route
            path="admin/recoverpassword/:token"
            element={<RecoverPasswordAdmin />}
          ></Route>
          <Route
            path="admin"
            element={
              <AdminRequireAuth>
                <Dashboard />
              </AdminRequireAuth>
            }
          ></Route>
          <Route
            path="admin/dashboard"
            element={
              <AdminRequireAuth>
                <Dashboard />
              </AdminRequireAuth>
            }
          ></Route>
          <Route
            path="admin/articles"
            element={
              <AdminRequireAuth>
                <Articles />
              </AdminRequireAuth>
            }
          ></Route>
          <Route
            path="admin/article/:id"
            element={
              <AdminRequireAuth>
                <ArticleDetails />
              </AdminRequireAuth>
            }
          ></Route>
          <Route path="*" element={<Page404 />} />
        </Routes>
      ) : (
        <Routes>
          {/* User Panel */}
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="active/:token" element={<ActiveAccount />}></Route>
          <Route path="findmail" element={<FindMail />}></Route>
          <Route path="checkmsg" element={<CheckMsg />}></Route>
          <Route
            path="recoverpassword/:token"
            element={<RecoverPassword />}
          ></Route>
          <Route
            path=""
            element={
              <RequireAuth>
                <DashboardUser />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="submitarticle"
            element={
              <RequireAuth>
                <SubmitArticle />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="result"
            element={
              <RequireAuth>
                <Result />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="award"
            element={
              <RequireAuth>
                <AwardsUser />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="author"
            element={
              <RequireAuth>
                <AuthorUser />
              </RequireAuth>
            }
          ></Route>

          {/* Admin panel */}
          <Route path="admin/register" element={<RegisterAdmin />} />
          <Route path="admin/login" element={<LoginAdmin />} />
          <Route path="admin/active/:token" element={<ActiveAccountAdmin />} />
          <Route path="admin/findmail" element={<FindMailAdmin />} />
          <Route path="admin/checkmsg" element={<CheckMsgAdmin />}></Route>
          <Route
            path="admin/recoverpassword/:token"
            element={<RecoverPasswordAdmin />}
          ></Route>
          <Route
            path="admin"
            element={
              <AdminRequireAuth>
                <Dashboard />
              </AdminRequireAuth>
            }
          ></Route>
          <Route
            path="admin/dashboard"
            element={
              <AdminRequireAuth>
                <Dashboard />
              </AdminRequireAuth>
            }
          ></Route>
          <Route
            path="admin/articles"
            element={
              <AdminRequireAuth>
                <Articles />
              </AdminRequireAuth>
            }
          ></Route>
          <Route
            path="admin/awards"
            element={
              <AdminRequireAuth>
                <Awards />
              </AdminRequireAuth>
            }
          ></Route>
          <Route
            path="admin/author"
            element={
              <AdminRequireAuth>
                <Author />
              </AdminRequireAuth>
            }
          ></Route>
          <Route
            path="admin/grade"
            element={
              <AdminRequireAuth>
                <GradeSelection />
              </AdminRequireAuth>
            }
          ></Route>
          <Route
            path="admin/announce"
            element={
              <AdminRequireAuth>
                <AnnounceResult />
              </AdminRequireAuth>
            }
          ></Route>
          <Route
            path="admin/approve"
            element={
              <AdminRequireAuth>
                <JudgeApproved />
              </AdminRequireAuth>
            }
          ></Route>
          <Route
            path="admin/article/:id"
            element={
              <AdminRequireAuth>
                <ArticleDetails />
              </AdminRequireAuth>
            }
          ></Route>
          <Route path="*" element={<Page404 />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default Routers;
