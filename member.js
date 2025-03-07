function skillsMember() {
  return {
    member: {
      skills: {
        type: new GraphQLList(skillType),
        resolve: (member) => {
          return member.skills;
        }
      }
    }
  };
}