import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import CompleteProfileScreenFreelancer from './views/complete-profile-screen-freelancer'
import ProfileCreationScreen from './views/profile-creation-screen'
import WalletConnected from './views/wallet-connected'
import JobDetailsScreen from './views/job-details-screen'
import WelcomeScreen from './views/welcome-screen'
import SettingsScreenClient from './views/settings-screen-client'
import PostaJobScreenClient from './views/posta-job-screen-client'
import ApprovalConfirmationScreen from './views/approval-confirmation-screen'
import DashboardFreelancer from './views/dashboard-freelancer'
import ProposalReviewScreenClient from './views/proposal-review-screen-client'
import MyJobsScreenFreelancer from './views/my-jobs-screen-freelancer'
import DasboardClient from './views/dasboard-client'
import SetPreferencesScreenFreelancer from './views/set-preferences-screen-freelancer'
import ProfileCompletionFreelancer from './views/profile-completion-freelancer'
import BasenameSetupReminder from './views/basename-setup-reminder'
import ApproveMilestoneScreenClient from './views/approve-milestone-screen-client'
import SubmitWorkScreenFreelancer from './views/submit-work-screen-freelancer'
import SettingsScreenFreelancer from './views/settings-screen-freelancer'
import FreelancerHomepageScreen from './views/freelancer-homepage-screen'
import TransactionSuccessful from './views/transaction-successful'
import ClientdAppScreen from './views/clientd-app-screen'
import Nav from './views/nav'
import NotificationsScreenClient from './views/notifications-screen-client'
import ReviewContractScreen from './views/review-contract-screen'
import ClientHomepageScreen from './views/client-homepage-screen'
import Theattachedwireframefocusonenhancinguserflowintheh from './views/theattachedwireframefocusonenhancinguserflowintheh'
import Logo from './views/logo'
import NotificationScreenClient from './views/notification-screen-client'
import ConnectWalletScreen from './views/connect-wallet-screen'
import NavfordAppscreen from './views/navford-appscreen'
import ProfileCompletionClient from './views/profile-completion-client'
import MessageScreenClient from './views/message-screen-client'
import ProposalSubmissionScreen from './views/proposal-submission-screen'
import FreelancerdAppScreen from './views/freelancerd-app-screen'
import SetPreferencesScreenClient from './views/set-preferences-screen-client'
import RequestRevisionTextBox from './views/request-revision-text-box'
import NotificationsScreenFreelancer from './views/notifications-screen-freelancer'
import CompleteProfileScreenClient from './views/complete-profile-screen-client'
import ProfileScreenFreelancer from './views/profile-screen-freelancer'
import ProfileScreenClient from './views/profile-screen-client'
import EditProfileScreenClient from './views/edit-profile-screen-client'
import EditProfileScreenFreelancer from './views/edit-profile-screen-freelancer'
import WalletConnected1 from './views/wallet-connected1'
import NotificationsScreenFreelancer1 from './views/notifications-screen-freelancer1'
import MyProjectsScreenClient from './views/my-projects-screen-client'
import NavafterloginscreenClient from './views/navafterloginscreen-client'
import ContractCreationClient from './views/contract-creation-client'
import NavafterloginscreenFreelancer from './views/navafterloginscreen-freelancer'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route
          component={CompleteProfileScreenFreelancer}
          exact
          path="/complete-profile-screen-freelancer"
        />
        <Route
          component={ProfileCreationScreen}
          exact
          path="/profile-creation-screen"
        />
        <Route component={WalletConnected} exact path="/wallet-connected" />
        <Route component={JobDetailsScreen} exact path="/job-details-screen" />
        <Route component={WelcomeScreen} exact path="/" />
        <Route
          component={SettingsScreenClient}
          exact
          path="/settings-screen-client"
        />
        <Route
          component={PostaJobScreenClient}
          exact
          path="/posta-job-screen-client"
        />
        <Route
          component={ApprovalConfirmationScreen}
          exact
          path="/approval-confirmation-screen"
        />
        <Route
          component={DashboardFreelancer}
          exact
          path="/dashboard-freelancer"
        />
        <Route
          component={ProposalReviewScreenClient}
          exact
          path="/proposal-review-screen-client"
        />
        <Route
          component={MyJobsScreenFreelancer}
          exact
          path="/my-jobs-screen-freelancer"
        />
        <Route component={DasboardClient} exact path="/dasboard-client" />
        <Route
          component={SetPreferencesScreenFreelancer}
          exact
          path="/set-preferences-screen-freelancer"
        />
        <Route
          component={ProfileCompletionFreelancer}
          exact
          path="/profile-completion-freelancer"
        />
        <Route
          component={BasenameSetupReminder}
          exact
          path="/basename-setup-reminder"
        />
        <Route
          component={ApproveMilestoneScreenClient}
          exact
          path="/approve-milestone-screen-client"
        />
        <Route
          component={SubmitWorkScreenFreelancer}
          exact
          path="/submit-work-screen-freelancer"
        />
        <Route
          component={SettingsScreenFreelancer}
          exact
          path="/settings-screen-freelancer"
        />
        <Route
          component={FreelancerHomepageScreen}
          exact
          path="/freelancer-homepage-screen"
        />
        <Route
          component={TransactionSuccessful}
          exact
          path="/transaction-successful"
        />
        <Route component={ClientdAppScreen} exact path="/clientd-app-screen" />
        <Route component={Nav} exact path="/nav" />
        <Route
          component={NotificationsScreenClient}
          exact
          path="/notifications-screen-client"
        />
        <Route
          component={ReviewContractScreen}
          exact
          path="/review-contract-screen"
        />
        <Route
          component={ClientHomepageScreen}
          exact
          path="/client-homepage-screen"
        />
        <Route
          component={Theattachedwireframefocusonenhancinguserflowintheh}
          exact
          path="/theattachedwireframefocusonenhancinguserflowintheh"
        />
        <Route component={Logo} exact path="/logo" />
        <Route
          component={NotificationScreenClient}
          exact
          path="/notification-screen-client"
        />
        <Route
          component={ConnectWalletScreen}
          exact
          path="/connect-wallet-screen"
        />
        <Route component={NavfordAppscreen} exact path="/navford-appscreen" />
        <Route
          component={ProfileCompletionClient}
          exact
          path="/profile-completion-client"
        />
        <Route
          component={MessageScreenClient}
          exact
          path="/message-screen-client"
        />
        <Route
          component={ProposalSubmissionScreen}
          exact
          path="/proposal-submission-screen"
        />
        <Route
          component={FreelancerdAppScreen}
          exact
          path="/freelancerd-app-screen"
        />
        <Route
          component={SetPreferencesScreenClient}
          exact
          path="/set-preferences-screen-client"
        />
        <Route
          component={RequestRevisionTextBox}
          exact
          path="/request-revision-text-box"
        />
        <Route
          component={NotificationsScreenFreelancer}
          exact
          path="/notifications-screen-freelancer"
        />
        <Route
          component={CompleteProfileScreenClient}
          exact
          path="/complete-profile-screen-client"
        />
        <Route
          component={ProfileScreenFreelancer}
          exact
          path="/profile-screen-freelancer"
        />
        <Route
          component={ProfileScreenClient}
          exact
          path="/profile-screen-client"
        />
        <Route
          component={EditProfileScreenClient}
          exact
          path="/edit-profile-screen-client"
        />
        <Route
          component={EditProfileScreenFreelancer}
          exact
          path="/edit-profile-screen-freelancer"
        />
        <Route component={WalletConnected1} exact path="/wallet-connected1" />
        <Route
          component={NotificationsScreenFreelancer1}
          exact
          path="/notifications-screen-freelancer1"
        />
        <Route
          component={MyProjectsScreenClient}
          exact
          path="/my-projects-screen-client"
        />
        <Route
          component={NavafterloginscreenClient}
          exact
          path="/navafterloginscreen-client"
        />
        <Route
          component={ContractCreationClient}
          exact
          path="/contract-creation-client"
        />
        <Route
          component={NavafterloginscreenFreelancer}
          exact
          path="/navafterloginscreen-freelancer"
        />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
