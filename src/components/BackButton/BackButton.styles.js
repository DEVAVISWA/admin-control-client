import styled from "styled-components";

export const Wrapper = styled.div`
.back-button {
  display: flex;
  margin-top: 2rem;
  margin-left: 2rem;
}

.back-link {
  background-color: #00a6ff; /* bg-sky-800 */
  color: #fff; /* text-white */
  padding: 0.25rem 0.5rem; /* px-4 py-1 */
  border-radius: 0.375rem; /* rounded-lg */
}

.back-link:hover {
  filter: brightness(90%);
}

.back-icon {
  font-size: 1.25rem; /* text-2xl */
}
`;