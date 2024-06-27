import shutil
import os
from datetime import datetime

def backup_database(db_path, backup_dir):
    if not os.path.exists(backup_dir):
        os.makedirs(backup_dir)

    backup_filename = f"climate_change_backup_{datetime.now().strftime('%Y%m%d%H%M%S')}.db"
    backup_path = os.path.join(backup_dir, backup_filename)
    
    shutil.copy(db_path, backup_path)
    print(f"Database backed up to {backup_path}")

if __name__ == "__main__":
    db_path = '../climate_change.db'
    backup_dir = '../backups'
    backup_database(db_path, backup_dir)
