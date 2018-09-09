import React from "react";
import Dropzone from "react-dropzone";
import axios from "axios";
import { compose, gql, graphql } from "react-apollo";



export function uploadToS3 = async (file, signedRequest) => {
    const options = {
      headers: {
        "Content-Type": file.type
      }
    };
    await axios.put(signedRequest, file, options);
  };


  submit = async () => {
    const { name, file } = this.state;
    const response = await this.props.s3Sign({
      variables: {
        filename: this.formatFilename(file.name),
        filetype: file.type
      }
    });

    const { signedRequest, url } = response.data.signS3;
    await this.uploadToS3(file, signedRequest);

    const graphqlResponse = await this.props.createChampion({
      variables: {
        name,
        pictureUrl: url
      }
    });

    this.props.history.push(
      `/champion/${graphqlResponse.data.createChampion.id}`
    );
  };


const CreateChampionMutation = gql`
  mutation($name: String!, $pictureUrl: String!) {
    createChampion(name: $name, pictureUrl: $pictureUrl) {
      id
    }
  }
`;

const s3SignMutation = gql`
  mutation($filename: String!, $filetype: String!) {
    signS3(filename: $filename, filetype: $filetype) {
      url
      signedRequest
    }
  }
`;

export default compose(
  graphql(CreateChampionMutation, { name: "createChampion" }),
  graphql(s3SignMutation, { name: "s3Sign" })
)(Upload);