import { useNavigate } from 'react-router-dom';
import { backButton } from '@tma.js/sdk-react';
import { type PropsWithChildren, useEffect } from 'react';

/**
 * True if it is allowed to go back from this page.
 */
function Page({ children, back = true }: PropsWithChildren<{ back?: boolean }>) {
  const navigate = useNavigate();

  useEffect(() => {
    if (back) {
      backButton.show();
      return backButton.onClick(() => navigate(-1));
    }
    backButton.hide();
  }, [back]);

  return <>{children}</>;
}

export default Page;
