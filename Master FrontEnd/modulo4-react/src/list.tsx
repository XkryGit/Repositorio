import React, { useCallback, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LinkContext } from "./link.context";

interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

export const ListPage: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const { link, setLink } = React.useContext(LinkContext);
  const [org, setOrg] = React.useState(link);
  const [search, setSearch] = React.useState(false);

  function seters(params: string) {
    setSearch(!search);
    setLink(org);
  }

  React.useEffect(() => {
    fetch(`https://api.github.com/orgs/${org}/members`)
      .then((response) => response.json())
      .then((json) => setMembers(json))
      .catch((error) => alert("Error de busqueda"));
  }, [search]);

  return (
    <>
      <h2>Hello from List page</h2>
      <input type="text" value={org} onChange={(e) => setOrg(e.target.value)} />
      <button onClick={() => seters(org)}>search</button>
      <div className="list-user-list-container">
        <span className="list-header">Avatar</span>
        <span className="list-header">Id</span>
        <span className="list-header">Name</span>
        {members.map((member) => (
          <>
            <img src={member.avatar_url} />
            <span>{member.id}</span>
            <Link to={`/detail/${member.login}`}>{member.login}</Link>
          </>
        ))}
      </div>
    </>
  );
};
