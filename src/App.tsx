import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { DocumentCapturerType, DocumentType, Onboarding, OnboardingConfig, DocumentStageConfig } from 'aliceonboarding';

function onOnboardingSuccess() {
  console.log("Success");
}

function onOnboardingFailure() {
  console.log("Failure");
}

function onOnboardingCanceled() {
  console.log("Canceled");
}

function startOnboarding() {
  const onboardingConfig = new OnboardingConfig();
  // TODO: fill with a valid user token
  onboardingConfig.withUserToken();
  onboardingConfig.withAddDocumentStage(DocumentType.IDCARD, "ESP", new DocumentStageConfig(DocumentCapturerType.CAMERA, true));

  const onboarding = new Onboarding("alice", onboardingConfig);
  onboarding.run(onOnboardingSuccess, onOnboardingFailure, onOnboardingCanceled);

}

function App() {

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => startOnboarding()}>
          Start onboarding
        </button>
      </div>
      <div id="alice">
      </div>
    </>
  )
}

export default App
