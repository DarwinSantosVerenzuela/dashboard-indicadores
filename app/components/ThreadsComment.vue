<script setup lang="ts">
import { ref } from 'vue'

interface User {
  id: number;
  name: string;
  avatar: string;
  isDonator?: boolean;
}

interface Post {
  id: number;
  user: User;
  content: string;
  time: string;
  likes: number;
  replies: number;
  reposts: number;
  image?: string;
  isLiked?: boolean;
  isReposted?: boolean;
  childReplies?: Post[];
}

const props = defineProps<{
  post: Post;
  depth: number;
  replyingToId: number | null;
}>()

const emits = defineEmits(['like', 'repost', 'share', 'reply', 'submit-reply'])

const replyContent = ref('')

const handleSubmitReply = () => {
  if (!replyContent.value.trim()) return
  emits('submit-reply', { parentId: props.post.id, content: replyContent.value })
  replyContent.value = ''
}
</script>

<template>
  <div class="comment-branch" :class="{ 'nested': depth > 0 }">
    <div class="post-layout">
      <div class="avatar-col">
        <img :src="post.user.avatar" :alt="post.user.name" class="avatar-main">
        <div v-if="post.childReplies?.length || replyingToId === post.id" class="thread-line"></div>
      </div>
      <div class="content-col">
        <div class="post-header">
          <div class="user-info">
            <span class="username">{{ post.user.name }}</span>
            <span v-if="post.user.isDonator" class="donator-badge">Donante</span>
          </div>
          <span class="post-time">{{ post.time }}</span>
        </div>
        
        <p class="post-text">{{ post.content }}</p>
        
        <div v-if="post.image" class="post-image-container">
          <img :src="post.image" alt="Post content" class="post-image">
        </div>

        <div class="post-actions">
          <button class="action-btn" :class="{ liked: post.isLiked }" @click="emits('like', post)">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" :fill="post.isLiked ? 'currentColor' : 'none'" stroke="currentColor" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            <span>{{ post.likes }}</span>
          </button>
          
          <button class="action-btn" @click="emits('reply', post.id)">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-13.5 8.38 8.38 0 0 1 3.8.9L21 3z"></path>
            </svg>
            <span>{{ post.childReplies?.length || 0 }}</span>
          </button>

          <button class="action-btn" :class="{ reposted: post.isReposted }" @click="emits('repost', post)">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="17 1 21 5 17 9"></polyline>
              <path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
              <polyline points="7 23 3 19 7 15"></polyline>
              <path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
            </svg>
            <span>{{ post.reposts }}</span>
          </button>

          <button class="action-btn" @click="emits('share', post)">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </div>

        <!-- Inline Reply Input -->
        <div v-if="replyingToId === post.id" class="reply-input-box">
          <input 
            v-model="replyContent" 
            type="text" 
            placeholder="Escribe tu respuesta..." 
            @keyup.enter="handleSubmitReply"
            autoFocus
          >
          <button class="reply-submit-btn" :disabled="!replyContent.trim()" @click="handleSubmitReply">Responder</button>
        </div>

        <!-- Nested Replies -->
        <div v-if="post.childReplies?.length" class="nested-replies">
          <ThreadsComment 
            v-for="reply in post.childReplies" 
            :key="reply.id" 
            :post="reply" 
            :depth="depth + 1"
            :replyingToId="replyingToId"
            @like="$emit('like', $event)"
            @repost="$emit('repost', $event)"
            @share="$emit('share', $event)"
            @reply="$emit('reply', $event)"
            @submit-reply="$emit('submit-reply', $event)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.comment-branch {
  width: 100%;
}

.nested {
  margin-top: 4px;
}

.post-layout {
  display: flex;
  gap: 12px;
  padding: 12px 16px;
}

.avatar-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 36px; /* Slightly smaller for nested */
}

.avatar-main {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
}

.thread-line {
  width: 2px;
  flex: 1;
  background: #e5e5e5;
  margin-top: 6px;
  border-radius: 1px;
}

.content-col {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.post-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 6px;
}

.username {
  font-weight: 700;
  font-size: 0.9rem;
}

.donator-badge {
  background: #000;
  color: #fff;
  font-size: 0.6rem;
  padding: 1px 5px;
  border-radius: 3px;
  text-transform: uppercase;
  font-weight: 800;
}

.post-time {
  font-size: 0.8rem;
  color: #999;
}

.post-text {
  font-size: 0.95rem;
  line-height: 1.4;
  margin: 2px 0 8px 0;
  color: #1a1a1a;
}

.post-image-container {
  margin-bottom: 8px;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #f1f1f1;
}

.post-image {
  width: 100%;
  display: block;
}

.post-actions {
  display: flex;
  gap: 20px;
  margin-bottom: 4px;
}

.action-btn {
  background: none;
  border: none;
  padding: 0;
  display: flex;
  align-items: center;
  gap: 4px;
  color: #666;
  cursor: pointer;
  transition: all 0.2s;
}

.action-btn:hover {
  color: #000;
}

.action-btn.liked svg {
  fill: #ff3040;
  color: #ff3040;
}

.action-btn.reposted {
  color: #00ba7c;
}

.action-btn span {
  font-size: 0.8rem;
  font-weight: 500;
}

.reply-input-box {
  display: flex;
  gap: 8px;
  margin: 12px 0;
  padding: 8px;
  background: #f8f9fa;
  border-radius: 12px;
}

.reply-input-box input {
  flex: 1;
  border: none;
  background: transparent;
  outline: none;
  font-size: 0.9rem;
}

.reply-submit-btn {
  background: #000;
  color: #fff;
  border: none;
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
}

.reply-submit-btn:disabled {
  opacity: 0.3;
}

.nested-replies {
  margin-top: 8px;
  border-left: none; /* We use the thread-line in avatar-col instead */
}
</style>
