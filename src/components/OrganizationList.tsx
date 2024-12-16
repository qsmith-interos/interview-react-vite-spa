import { FC } from "react";

const OrganizationList: FC = () => {
  return (
    <>
        <div>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>URL</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                  <td>org.id</td>
                  <td>org.name</td>
                  <td>org.email</td>
                  <td>org.url</td>
                  <td>
                    <button>Edit</button>
                    <button>Delete</button>
                  </td>
                </tr>
            </tbody>
          </table>
        </div>
    </>
  );
};

export default OrganizationList;
