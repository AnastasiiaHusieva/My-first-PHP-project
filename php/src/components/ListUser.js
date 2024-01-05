function ListUser() {
  return (
    <div>
      <h1>List Users</h1>
      <form>
        <table>
            <tbody>
                <tr>
                    <th></th>
                    <td></td>
                </tr>
            </tbody>
        </table>
        <label> Name: </label>
        <input type="text" name="name" />
        <br />
        <label> Email: </label>
        <input type="text" name="email" />
        <br />
        <label> Mobile: </label>
        <input type="text" name="mobile" />
      </form>
    </div>
  );
}

export default ListUser;
