import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: var(--maxWidth);
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;;
  padding: 0 20px; // This will remove the space between the cells
    table {
        border-collapse: collapse;
        border: 1px solid;
        border-color: #d4d4d4;
        border-radius: 50%;
    }

  th,
  td {
    padding: 8px;
    text-align: left;
  }
    th {
        background-color: #6c9cf5;
        color: var(--white);
    }

    tr {
        background-color: #f5f5f5;
        color: black;
    }
    tr:nth-child(even) {
        background-color: #6c9cf5;
        color: var(--white);
    }

    tr:hover {
        background-color: #dbfcff;
        color: black;
    }

    .add {
        font-size: 2rem;
        color: #6c9cf5;
        cursor: pointer;
        margin: 10px 0;
        right: 0;
    }
    
    .show-button {
        color: #07f7df;
        cursor: pointer;
        font-size: 20px;
        margin-left: 10px;
    }
    .edit-button{
      color: #e65555;
        cursor: pointer;
        font-size: 20px;
        margin-left: 10px;
    }

    .delete-button {
        color: #f5f233;
        cursor: pointer;
        font-size: 20px;
        margin-left: 10px;
    }
`;
