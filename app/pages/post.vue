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
  childReplies?: Post[]; // Nested replies
}

const users: User[] = [
  { id: 1, name: 'Sofia Rodriguez', avatar: 'https://i.pravatar.cc/150?u=sofia', isDonator: true },
  { id: 2, name: 'Carlos Mendoza', avatar: 'https://i.pravatar.cc/150?u=carlos', isDonator: true },
  { id: 3, name: 'Ana García', avatar: 'https://i.pravatar.cc/150?u=ana', isDonator: false },
  { id: 4, name: 'Julian Vivas', avatar: 'https://i.pravatar.cc/150?u=julian', isDonator: true },
  { id: 5, name: 'Maria Fernanda', avatar: 'https://i.pravatar.cc/150?u=maria', isDonator: false },
  { id: 6, name: 'Roberto Gomez', avatar: 'https://i.pravatar.cc/150?u=roberto', isDonator: true },
  { id: 14, name: 'Jorge Luis', avatar: 'https://i.pravatar.cc/150?u=jorge', isDonator: true },
  { id: 100, name: 'Knowtech', avatar: '/imagenes/logo/kowntech_1.png', isDonator: true }
]

const currentUser = ref<User>(users.find(u => u.id === 100)!)
const newPostContent = ref('')

const posts = ref<Post[]>([
  {
    id: 1,
    user: users[0]!,
    content: '¡Increíble el impacto que estamos logrando juntos! Gracias a todos los donantes por hacer posible este evento. 🚀',
    time: '2h',
    likes: 124,
    replies: 12,
    reposts: 42,
    isLiked: false,
    isReposted: false,
    childReplies: [
      {
        id: 101,
        user: users[1]!,
        content: 'Totalmente de acuerdo, Sofia. ¡El evento fue un éxito!',
        time: '1h',
        likes: 15,
        replies: 0,
        reposts: 2,
        isLiked: false,
        isReposted: false,
        childReplies: [
          {
            id: 102,
            user: users[2]!,
            content: '¿Cuándo es el próximo? No me lo quiero perder.',
            time: '45min',
            likes: 5,
            replies: 0,
            reposts: 0,
            isLiked: true,
            isReposted: false,
            childReplies: []
          }
        ]
      }
    ]
  },
  {
    id: 2,
    user: users[1]!,
    content: 'Acabo de revisar las estadísticas y el crecimiento es exponencial. ¡Vamos por más!',
    time: '4h',
    likes: 85,
    replies: 5,
    reposts: 12,
    isLiked: true,
    isReposted: false
  },
  {
    id: 3,
    user: users[3]!,
    content: '¿Alguien tiene el reporte de la semana pasada? Me gustaría compararlo con los resultados de hoy.',
    time: '6h',
    likes: 42,
    replies: 18,
    reposts: 8,
    isLiked: false,
    isReposted: true
  },
  {
    id: 4,
    user: users[5]!,
    content: 'Preparando todo para la reunión de mañana. ¡Emocionado por lo que viene!',
    time: '8h',
    likes: 210,
    replies: 34,
    reposts: 56,
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1000',
    isLiked: false,
    isReposted: false
  }
])

const toggleLike = (post: Post) => {
  if (post.isLiked) {
    post.likes--
    post.isLiked = false
  } else {
    post.likes++
    post.isLiked = true
  }
}

const createPost = () => {
  if (!newPostContent.value.trim()) return
  
  const newPost: Post = {
    id: Date.now(),
    user: currentUser.value,
    content: newPostContent.value,
    time: 'Ahora',
    likes: 0,
    replies: 0,
    reposts: 0,
    isLiked: false,
    isReposted: false
  }
  
  posts.value.unshift(newPost)
  newPostContent.value = ''
}

const replyingToId = ref<number | null>(null)

const handleReply = (postId: number) => {
  replyingToId.value = replyingToId.value === postId ? null : postId
}

const handleSubmitReply = ({ parentId, content }: { parentId: number, content: string }) => {
  const newReply: Post = {
    id: Date.now(),
    user: currentUser.value,
    content: content,
    time: 'Ahora',
    likes: 0,
    replies: 0,
    reposts: 0,
    isLiked: false,
    isReposted: false,
    childReplies: []
  }

  const added = findAndAddReply(posts.value, parentId, newReply)
  if (added) {
    replyingToId.value = null
  }
}

const findAndAddReply = (targetPosts: Post[], parentId: number, newReply: Post): boolean => {
  for (const post of targetPosts) {
    if (post.id === parentId) {
      if (!post.childReplies) post.childReplies = []
      post.childReplies.push(newReply)
      return true
    }
    if (post.childReplies?.length) {
      if (findAndAddReply(post.childReplies, parentId, newReply)) return true
    }
  }
  return false
}

const toggleRepost = (post: Post) => {
  if (post.isReposted) {
    post.reposts--
    post.isReposted = false
  } else {
    post.reposts++
    post.isReposted = true
  }
}

const sharePost = (post: Post) => {
  activeSharingPost.value = post
  showShareModal.value = true
}

const showShareModal = ref(false)
const activeSharingPost = ref<Post | null>(null)

const confirmShareToChat = (userName: string) => {
  if (!activeSharingPost.value) return
  alert(`"${activeSharingPost.value.content}" compartido con ${userName}`)
  showShareModal.value = false
  activeSharingPost.value = null
}

const isLoadingMore = ref(false)

const loadMorePosts = () => {
  if (isLoadingMore.value) return
  isLoadingMore.value = true
  
  // Simulate API delay
  setTimeout(() => {
    const extraPosts: Post[] = [
      {
        id: Date.now() + 1,
        user: users[Math.floor(Math.random() * users.length)]!,
        content: 'Este es un post cargado dinámicamente para demostrar el scroll infinito. ¡La comunidad sigue creciendo! 💎',
        time: 'Antiguo',
        likes: Math.floor(Math.random() * 50),
        replies: Math.floor(Math.random() * 10),
        reposts: Math.floor(Math.random() * 20),
        isLiked: false,
        isReposted: false
      },
      {
        id: Date.now() + 2,
        user: users[Math.floor(Math.random() * users.length)]!,
        content: '¿Vieron las nuevas funcionalidades? Todo está quedando genial. #DonadoresUnidos',
        time: 'Antiguo',
        likes: Math.floor(Math.random() * 100),
        replies: Math.floor(Math.random() * 20),
        reposts: Math.floor(Math.random() * 30),
        isLiked: false,
        isReposted: false
      }
    ]
    posts.value.push(...extraPosts)
    isLoadingMore.value = false
  }, 800)
}

// Infinite scroll listener
const handleScroll = () => {
  const scrollHeight = document.documentElement.scrollHeight
  const scrollTop = document.documentElement.scrollTop
  const clientHeight = document.documentElement.clientHeight
  
  if (scrollTop + clientHeight >= scrollHeight - 100) {
    loadMorePosts()
  }
}

import { onMounted, onUnmounted } from 'vue'
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="threads-container">
    <DashboardHeader />

    <main class="feed">
      <!-- New Post Section -->
      <div class="new-post-box">
        <div class="post-layout">
          <div class="avatar-col">
            <img :src="currentUser.avatar" :alt="currentUser.name" class="avatar-main">
            <div class="thread-line disabled"></div>
          </div>
          <div class="content-col">
            <input 
              v-model="newPostContent" 
              type="text" 
              placeholder="¿Qué hay de nuevo?" 
              @keyup.enter="createPost"
            >
            <button class="post-btn" :disabled="!newPostContent.trim()" @click="createPost">Publicar</button>
          </div>
        </div>
      </div>

      <!-- Feed -->
      <div class="feed-container">
        <ThreadsComment 
          v-for="post in posts" 
          :key="post.id" 
          :post="post" 
          :depth="0"
          :replyingToId="replyingToId"
          @like="toggleLike"
          @repost="toggleRepost"
          @share="sharePost"
          @reply="handleReply"
          @submit-reply="handleSubmitReply"
        />
      </div>
      <!-- Loading Indicator -->
      <div v-if="isLoadingMore" class="loading-more">
        <div class="spinner"></div>
        <span>Cargando más publicaciones...</span>
      </div>
    </main>

    <!-- Share to Chat Modal -->
    <Transition name="fade">
      <div v-if="showShareModal" class="share-overlay" @click="showShareModal = false">
        <div class="share-modal" @click.stop>
          <div class="share-header">
            <h3>Enviar a...</h3>
            <button class="close-btn" @click="showShareModal = false">&times;</button>
          </div>
          
          <div v-if="activeSharingPost" class="share-preview">
            <span class="preview-label">Compartiendo este hilo</span>
            <p class="preview-text">{{ activeSharingPost.content }}</p>
          </div>

          <div class="share-contacts">
            <div v-for="user in users" :key="user.id" class="share-contact-item" @click="confirmShareToChat(user.name)">
              <img :src="user.avatar" :alt="user.name" class="avatar-mini">
              <span class="contact-name">{{ user.name }}</span>
              <button class="send-btn">Enviar</button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.threads-container {
  min-height: 100vh;
  background: #ffffff;
  color: #000000;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: column;
  padding: 0 40px;
}

.feed {
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  margin: 0 auto; /* Center the feed */
}

.post-layout {
  display: flex;
  gap: 12px;
  padding: 16px;
}

.avatar-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 44px;
}

.avatar-main {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  object-fit: cover;
}

.avatar-mini {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  object-fit: contain;
  background: white;
}

.thread-line {
  width: 2px;
  flex: 1;
  background: #e5e5e5;
  margin-top: 8px;
  border-radius: 1px;
}

.thread-line.disabled {
  background: transparent;
}

.content-col {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

/* New Post Box */
.new-post-box {
  border-bottom: 1px solid #f1f1f1;
}

.new-post-box input {
  border: none;
  font-size: 1rem;
  padding: 12px 0;
  outline: none;
  width: 100%;
}

.post-btn {
  align-self: flex-end;
  background: #000;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 20px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s;
  font-size: 0.9rem;
}

.post-btn:disabled {
  opacity: 0.3;
  cursor: default;
}

.feed-container {
  border-top: 1px solid #f1f1f1;
}

/* Post Item styles are now in ThreadsComment component, but kept here for fallback */
.post-item {
  border-bottom: 1px solid #f1f1f1;
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
  font-size: 0.95rem;
}

.donator-badge {
  background: #000;
  color: #fff;
  font-size: 0.65rem;
  padding: 2px 6px;
  border-radius: 4px;
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 0.5px;
}

.post-time {
  font-size: 0.85rem;
  color: #999;
}

.post-text {
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 4px 0 12px 0;
  color: #1a1a1a;
}

.post-image-container {
  margin-bottom: 12px;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #f1f1f1;
}

.post-image {
  width: 100%;
  display: block;
}

.post-actions {
  display: flex;
  gap: 16px;
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
}

.action-btn.reposted {
  color: #00ba7c;
}

.action-btn span {
  font-size: 0.85rem;
  font-weight: 500;
}

/* Loading Spinner */
.loading-more {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  gap: 12px;
  color: #666;
  font-size: 0.9rem;
}

.spinner {
  width: 24px;
  height: 24px;
  border: 3px solid #f3f3f3;
  border-top: 3px solid #000;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Share Modal Styles */
.share-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  backdrop-filter: blur(4px);
}

.share-modal {
  background: #2b5278; /* Consistent with home/chat theme */
  width: 90%;
  max-width: 400px;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.4);
  color: white;
  overflow: hidden;
  animation: modalSlideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes modalSlideUp {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

.share-header {
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(255,255,255,0.1);
}

.share-header h3 {
  margin: 0;
  font-size: 1.2rem;
}

.close-btn {
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  opacity: 0.6;
}

.share-preview {
  padding: 16px 20px;
  background: rgba(255,255,255,0.05);
  border-bottom: 1px solid rgba(255,255,255,0.1);
}

.preview-label {
  font-size: 0.75rem;
  color: rgba(255,255,255,0.5);
  text-transform: uppercase;
  font-weight: 700;
  display: block;
  margin-bottom: 4px;
}

.preview-text {
  font-size: 0.9rem;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  opacity: 0.9;
}

.share-contacts {
  max-height: 400px;
  overflow-y: auto;
  padding: 8px 0;
}

.share-contact-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 20px;
  cursor: pointer;
  transition: background 0.2s;
}

.share-contact-item:hover {
  background: rgba(255,255,255,0.1);
}

.contact-name {
  flex: 1;
  font-weight: 600;
  font-size: 0.95rem;
}

.send-btn {
  background: #5288c1; /* Light blue from your theme */
  color: white;
  border: none;
  padding: 6px 16px;
  border-radius: 12px;
  font-size: 0.85rem;
  font-weight: 700;
  cursor: pointer;
}

/* Transitions */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
