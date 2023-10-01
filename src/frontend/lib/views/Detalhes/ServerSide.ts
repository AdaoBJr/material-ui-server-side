import { GetServerSideProps } from 'next';

import { useAppState } from 'frontend/state';

export const getServerSideProps: GetServerSideProps = async () => {
  const docId = useAppState.getState().docId;
  console.log('docId', docId);

  return {
    props: {
      docId,
    },
  };
};
