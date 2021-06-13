from flask.cli import AppGroup
from .users import seed_users, undo_users
from .languages import seed_languages, undo_languages
from .reviews import seed_reviews, undo_reviews
from .categories import seed_categories, undo_categories
from .service_languages import seed_service_languages, undo_service_languages
from .webs import seed_webs, undo_webs
from .web_packages import seed_web_packages, undo_web_packages
from .bugs import seed_bugs, undo_bugs
from .bug_packages import seed_bug_packages, undo_bug_packages
from .services import seed_services, undo_services
# from .languages import seed_languages, undo_languages
# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_categories()
    seed_languages()
    seed_service_languages()
    seed_webs()
    seed_web_packages()
    seed_bugs()
    seed_bug_packages()
    seed_services()
    seed_reviews()
    # Add other seed functions here

# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_categories()
    undo_languages()
    undo_service_languages()
    undo_webs()
    undo_web_packages()
    undo_bugs()
    undo_bug_packages()
    undo_services()
    undo_reviews()
    # Add other undo functions here
