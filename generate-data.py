# Regenerate dataset with all specified fields and structures
from faker import Faker
import random
from datetime import datetime, timedelta

faker = Faker()
Faker.seed(42)
random.seed(42)

NUM_USERS = 5
MAX_POSTS = 5
MAX_COMMENTS = 5
MAX_REPLIES = 2


def generate_users(num_users):
    users = []
    for i in range(1, num_users + 1):
        followers = random.sample(
            range(1, num_users + 1), random.randint(0, num_users - 1)
        )
        following = random.sample(
            range(1, num_users + 1), random.randint(0, num_users - 1)
        )
        users.append(
            {
                "id": i,
                "fullName": faker.name(),
                "username": faker.user_name(),
                "password": faker.password(),
                "profilePic": faker.image_url(width=150, height=150),
                "bio": faker.sentence(),
                "followers": followers,
                "following": following,
                "followersCount": len(followers),
                "followingCount": len(following),
                "postsCount": 0,
                "highlights": [
                    {
                        "id": faker.uuid4(),
                        "title": faker.word(),
                        "cover": faker.image_url(width=100, height=100),
                    }
                    for _ in range(random.randint(1, 3))
                ],
                "stories": [
                    {
                        "id": faker.uuid4(),
                        "media": faker.image_url(width=300, height=300),
                        "timestamp": faker.date_time_this_year().isoformat(),
                    }
                    for _ in range(random.randint(1, 3))
                ],
            }
        )
    return users


def generate_posts(users):
    posts = []
    post_id = 1
    for user in users:
        num_posts = random.randint(1, MAX_POSTS)
        user["postsCount"] = num_posts
        for _ in range(num_posts):
            posts.append(
                {
                    "id": post_id,
                    "userId": user["id"],
                    "image": faker.image_url(width=500, height=500),
                    "description": faker.sentence(),
                    "likes": random.randint(0, 500),
                    "commentsCount": 0,
                    "category": random.choice(["art", "cats", "cars", "music"]),
                    "timestamp": (
                        datetime.now() - timedelta(days=random.randint(0, 30))
                    ).isoformat(),
                    "comments": [],  # to be populated later
                }
            )
            post_id += 1
    return posts


def generate_comments(posts, users):
    comment_id = 1
    for post in posts:
        num_comments = random.randint(0, MAX_COMMENTS)
        post["commentsCount"] = num_comments
        for _ in range(num_comments):
            comment = {
                "id": comment_id,
                "userId": random.choice(users)["id"],
                "text": faker.sentence(),
                "likes": random.randint(0, 100),
                "timestamp": faker.date_time_this_month().isoformat(),
                "replies": [
                    {
                        "id": faker.uuid4(),
                        "userId": random.choice(users)["id"],
                        "text": faker.sentence(),
                        "timestamp": faker.date_time_this_month().isoformat(),
                    }
                    for _ in range(random.randint(0, MAX_REPLIES))
                ],
            }
            post["comments"].append(comment)
            comment_id += 1
    return posts


# Generate everything
users = generate_users(NUM_USERS)
posts = generate_posts(users)
posts_with_comments = generate_comments(posts, users)

# Final JSON structure
json_data = {"users": users, "posts": posts_with_comments}

# Preview the beginning of the generated JSON
import json

json.dumps(json_data, indent=2)[:1500]

# Save to db.json
with open("db.json", "w") as f:
    json.dump(json_data, f, indent=2)

print("Data has been saved to db.json")