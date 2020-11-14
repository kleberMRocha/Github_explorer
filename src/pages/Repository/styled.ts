/* eslint-disable prettier/prettier */
import styled from 'styled-components';

export const Header = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
#goBack{
  color:#A8A8B3;
  display:flex;
  align-items:center;
  text-decoration:none;
}
`;

export const UserInfo = styled.div`
display:flex;
div{
  display:flex;
  justify-content:'space-between';
  align-items:center;
}
.title{
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  justify-content:center;
}
h2{
  color:#3D3D4D;
  display:block;
}
p{
  color:#737380;
}
img{
  height:80px;
  border-radius:50px;
  margin:50px 20px;

}
`;

export const RepoInfos = styled.div`
display:flex;
div+div{
  margin-left:80px;
}
h2{
  color:#3D3D4D;
  display:block;
}
p{
  color:#737380;
}
div{
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
}
`;

export const Repositories = styled.div`
  max-width: 100%;
  margin-top: 50px;
  h2{
    max-width:70%;
  }
  a + a {
    margin-top: 15px;
  }
  a {
    color: #3a3a3a;
    display: flex;
    flex:1;
    background-color: #ffffff;
    display: block;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px;
    border-radius: 5px;
    text-decoration: none;
    transition: border-bottom, transform 0.3s;
    &:hover {
      border-right: 8px #04d361 solid;
      transform: translateX(10px);
    }
    @media(max-width: 800px) {
    flex-direction: column;
    position: relative;
  }
  }

  div {
    margin-left: 20px;
    flex: 1;
    strong {
      font: 20px;
      color: #3d3d4d;
    }
    p {
      font: 16px;
      color: #a8a8b3;
    }
  }
`;
