import {defineAuth} from '@aws-amplify/backend'

/**
 * Define and configure yur auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */

export const auth = defineAuth({
  loginWith: {
    email: true,
  },
});