const bcrypt = require('bcryptjs')
import AdminRegister from './models/admin_register'
const jwt = require('jsonwebtoken')

const resolvers = {
    
    // create admin
    createAdminRegister: args => {
        return AdminRegister.findOne({ username: args.AdminInput.username })
            .then(username => {
                if (username) {
                    throw new Error('Username Already Exist.');
                }
                else {
                    return bcrypt.hash(args.AdminInput.password, 12)
                        .then(hashedpassword => {
                            const admin = new AdminRegister({
                                username: args.AdminInput.username,
                                password: hashedpassword,
                            })
                            return admin.save()
                        })
                }
            })
            .catch(err => {
                throw err;
            });
    },

    //login jwt

    adminLogin: async ({ username, password }) => {
        const admin = await AdminRegister.findOne({ username: username });
        if (!admin) {
            throw new Error('Admin Not Exists');
        }
        const isEqual = await bcrypt.compare(password, admin.password);
        if (!isEqual) {
            throw new Error('Password Incorrect');
        }
        const token = jwt.sign({ adminId: admin.id, username: admin.username }, 'adminLoginSecretKey', {
            expiresIn: '1h'
        })
        return {
            adminId: admin.id,
            token: token,
            tokenExpiration: '1h'
        }

    },

}

export default resolvers;

