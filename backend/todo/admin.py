from django.contrib import admin
from .models import Todo


# Register your models here.
@admin.register(Todo)
class TodoAdmin(admin.ModelAdmin):
    
    list_display = ('id', 'title', 'completed', 'created_at', 'updated_at')
    list_editable = ('completed',) # Make completed field editable in the list view
    list_display_links = ('id', 'title') # Make id and title clickable 
    list_filter = ('completed', 'created_at') # Add filters for completed status and creation date
    search_fields = ('title', 'description') # Add search functionality
    ordering = ('id',) # Order by id
    actions_on_top = True

    actions = ['mark_completed', 'mark_incomplete']

    def mark_completed(self, request, queryset):
        updated = queryset.update(completed =True)
        self.message_user(request, f"{updated} todo(s) marked as completed.")
    mark_completed.short_description = "Mark selected todos as completed"

    def mark_incomplete(self, request, queryset):
        updated =queryset.update(completed = False)
        self.message_user(request, f"{updated} todo(s) marked as incomplete.")
    mark_incomplete.short_description = "Mark selected todos as incomplete"
