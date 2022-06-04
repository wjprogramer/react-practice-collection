import {
  Link
} from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/demos/getSnapshotBeforeUpdate">getSnapshotBeforeUpdate</Link>
        </li>
      </ul>
    </>
  )
}

export default HomePage;