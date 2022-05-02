import { withSSRContext } from "aws-amplify";

export function truncateFileName(str: string, max: number) {
  const splitStr = str.split('.');
  return str.length > max ? str.substring(0, max - 1) + '…' : str;
}

export function bytesToSize(bytes: number) {
  var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  if (bytes == 0) return '0 Byte';
  var i = Math.floor(Math.log(bytes) / Math.log(1024));
  return Math.round(bytes / Math.pow(1024, i)) + ' ' + sizes[i];
}

/**
 * It wraps GerServerSideProps with Cognito Auth.
 * @param gssp 
 * @returns HOF : gssp
 * 
 */
export function withAuth(gssp: any) {
  return async (context: any) => {
    const { API } = withSSRContext(context)
    const gsspData = await gssp(context);
    try {
      const user = await API.currentAuthenticatedUser()
      return {
        props: {
          ...gsspData.props,
          authenticated: true, username: user.username
        }
      }
    } catch (err) {
      return {
        props: {
          ...gsspData.props,
          authenticated: false
        }
      }
    }

  }
}