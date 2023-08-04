const AbstractManager = require("./AbstractManager")

class ForumCommManager extends AbstractManager {
  constructor() {
    super({ table: "commentaires_forum" })
  }

  insert(forumComm) {
    return this.database.query(
      `INSERT INTO ${this.table} (utilisateurs_id, sujet_forum_id, commentaire, date_time) values (?,?,?,?)`,
      [
        forumComm.utilisateurs_id,
        forumComm.sujet_forum_id,
        forumComm.commentaire,
        forumComm.date_time,
      ]
    )
  }

  update(forumComm) {
    return this.database.query(
      `UPDATE ${this.table} SET utilisateurs_id = ?, sujet_forum_id = ?, commentaire = ?, date_time = ? WHERE id = ?`,
      [
        forumComm.utilisateurs_id,
        forumComm.sujet_forum_id,
        forumComm.commentaire,
        forumComm.date_time,
        forumComm.id,
      ]
    )
  }
}

module.exports = ForumCommManager
