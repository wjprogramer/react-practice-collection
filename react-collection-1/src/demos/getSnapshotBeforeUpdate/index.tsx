import ErrorBoundary from "./ErrorBoundary"
import App from "./App";
import "./index.css";

const GetSnapshotBeforeUpdateDemo = () => {
  return (
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  )
}

export default GetSnapshotBeforeUpdateDemo;