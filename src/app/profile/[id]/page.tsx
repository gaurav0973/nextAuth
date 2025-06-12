function UserProfile({params} : any) {
  const { id } = params;
  return (
    <div>UserProfile Page for ID: {id}</div>
  )
}
export default UserProfile