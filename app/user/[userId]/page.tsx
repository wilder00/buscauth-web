


const UserIdPage = ({ params }: { params: { userId: number } }) => {

  return <div>
    este es lo que encontramos en el route: {params.userId}
  </div>

}

export default UserIdPage;