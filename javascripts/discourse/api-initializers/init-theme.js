import { apiInitializer } from "discourse/lib/api";

export default apiInitializer((api) => {
  api.addPostClassesCallback((attrs) => {
    const user = api.getCurrentUser();
    if (user) {
      if (attrs.user_id === user.id) {
        return ["my-post"];
      }
    }
  });
});
