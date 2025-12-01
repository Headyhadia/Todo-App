from django.db import models

# Create your models here.
class Todo (models.Model):
    """
    This Model represents To do list items.
    Fields:
        title: The title of the to-do item.
        description: A detailed description of the to-do item.
        completed: A boolean indicating whether the to-do item is completed.
        created_at: The date and time when the to-do item was created.
        updated_at: The date and time when the to-do item was last updated.
    """
    title = models.CharField(max_length=200)
    description = models.TextField()
    completed = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title