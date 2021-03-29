import React, { useState, useEffect } from "react";
import User from "../models/User";
import Link from 'next/link';

export async function getServerSideProps(context) {

  const users = await User.all();

  
  return { 
    props: { users : users || [] }
  }
}

export default function Stories({users}) {

  return <div>
    <h3>Stories List</h3>

    <div>
      <p>{ users.length } USERS</p>

      { users.map(user => <p>user</p>) }
    </div>

    <Link href="/" ><a>Back to home</a></Link>
  </div>;
}