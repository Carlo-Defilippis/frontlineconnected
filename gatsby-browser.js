/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import 'firebase/auth'
import React from 'react';
import AuthProvider from './src/components/contexts/AuthContext'

export const wrapRootElement = ({ element }) => {
    return (
        <AuthProvider>
            {element}
        </AuthProvider>
    )
};