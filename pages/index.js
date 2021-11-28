export default function Home() {
  return (
    <div>
      <h1>Testing</h1>
      <div className="container-radio">
        <input type="radio" name="gender" />
        <label className="label-radio">Male</label>
        <br />
        <input type="radio" name="gender" />
        <label className="label-radio">Female</label>
      </div>
    </div>
  );
}
