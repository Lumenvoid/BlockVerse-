{
    blockverse_accounts: {
        "username": {
            id: unique_id,
            fullName: string,
            username: string,
            birthday: ISO_date,
            email: string,
            password: hashed_sha256,
            avatarColor: hex,
            coins: number,
            level: number,
            xp: number,
            worlds: array,
            inventory: array,
            friends: array,
            settings: object,
            createdAt: timestamp,
            lastLogin: timestamp,
            lastUpdated: timestamp
        }
    },
    blockverse_current_user: current_session_object
}
